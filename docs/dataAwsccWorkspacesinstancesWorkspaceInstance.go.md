# `dataAwsccWorkspacesinstancesWorkspaceInstance` Submodule <a name="`dataAwsccWorkspacesinstancesWorkspaceInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesinstancesWorkspaceInstance <a name="DataAwsccWorkspacesinstancesWorkspaceInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstance(scope Construct, id *string, config DataAwsccWorkspacesinstancesWorkspaceInstanceConfig) DataAwsccWorkspacesinstancesWorkspaceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig">DataAwsccWorkspacesinstancesWorkspaceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig">DataAwsccWorkspacesinstancesWorkspaceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccWorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccWorkspacesinstancesWorkspaceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccWorkspacesinstancesWorkspaceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesinstancesWorkspaceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance">Ec2ManagedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.managedInstance">ManagedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provisionState">ProvisionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId">WorkspaceInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Ec2ManagedInstance`<sup>Required</sup> <a name="Ec2ManagedInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance"></a>

```go
func Ec2ManagedInstance() DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a>

---

##### `ManagedInstance`<sup>Required</sup> <a name="ManagedInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.managedInstance"></a>

```go
func ManagedInstance() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a>

---

##### `ProvisionState`<sup>Required</sup> <a name="ProvisionState" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provisionState"></a>

```go
func ProvisionState() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tags"></a>

```go
func Tags() DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList</a>

---

##### `WorkspaceInstanceId`<sup>Required</sup> <a name="WorkspaceInstanceId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId"></a>

```go
func WorkspaceInstanceId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesinstancesWorkspaceInstanceConfig <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance#id DataAwsccWorkspacesinstancesWorkspaceInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags {

}
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceTags <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

&dataawsccworkspacesinstancesworkspaceinstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured"></a>

```go
func Configured() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```go
func AutoRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```go
func HttpProtocolIpv6() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting">BandwidthWeighting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthWeighting`<sup>Required</sup> <a name="BandwidthWeighting" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting"></a>

```go
func BandwidthWeighting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop">DisableApiStop</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized">EbsOptimized</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6">EnablePrimaryIpv6</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications">LicenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions">NetworkPerformanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a>

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions"></a>

```go
func CpuOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification"></a>

```go
func CreditSpecification() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a>

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop"></a>

```go
func DisableApiStop() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized"></a>

```go
func EbsOptimized() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnablePrimaryIpv6`<sup>Required</sup> <a name="EnablePrimaryIpv6" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6"></a>

```go
func EnablePrimaryIpv6() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions"></a>

```go
func EnclaveOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions"></a>

```go
func HibernationOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a>

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `LicenseSpecifications`<sup>Required</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications"></a>

```go
func LicenseSpecifications() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions"></a>

```go
func MaintenanceOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions"></a>

```go
func MetadataOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring"></a>

```go
func Monitoring() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a>

---

##### `NetworkPerformanceOptions`<sup>Required</sup> <a name="NetworkPerformanceOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions"></a>

```go
func NetworkPerformanceOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement"></a>

```go
func Placement() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a>

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications"></a>

```go
func TagSpecifications() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a>

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber"></a>

```go
func PartitionNumber() *f64
```

- *Type:* *f64

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesinstancesworkspaceinstance"

dataawsccworkspacesinstancesworkspaceinstance.NewDataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags">DataAwsccWorkspacesinstancesWorkspaceInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesinstancesWorkspaceInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags">DataAwsccWorkspacesinstancesWorkspaceInstanceTags</a>

---



